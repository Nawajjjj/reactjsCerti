const express = require('express');
const { exec } = require('child_process');
const multer = require('multer');
const router = express.Router();

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// POST route to handle certificate upload
router.post('/upload', upload.single('certificate'), (req, res) => {
    const filePath = req.file.path;

    // Execute Python script for OCR extraction
    exec(`python src/ocr/extract_text.py ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: 'OCR extraction failed' });
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).json({ error: 'Python error' });
        }

        // Parse Python output (stdout)
        const extractedData = JSON.parse(stdout);  // Assuming Python script returns JSON data
        res.json(extractedData);
    });
});

module.exports = router;
