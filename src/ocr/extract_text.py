from PIL import Image, ImageEnhance, ImageFilter
import pytesseract
import re

# Preprocessing the certificate image
def preprocess_image(image_path):
    img = Image.open(image_path)
    img = img.convert('L')  # Convert to grayscale
    img = img.filter(ImageFilter.MedianFilter())  # Reduce noise
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(2)
    img.save('preprocessed_certificate.png')
    return 'preprocessed_certificate.png'

# Extract text from the certificate image
def extract_text(image_path):
    preprocessed_image = preprocess_image(image_path)
    img = Image.open(preprocessed_image)
    text = pytesseract.image_to_string(img)
    return text

# Extract specific fields (Name, Course, etc.)
def extract_specific_fields(text):
    name = re.search(r'Name:\s*(.*)', text)
    date = re.search(r'Date:\s*(.*)', text)
    course = re.search(r'Course:\s*(.*)', text)
    institution = re.search(r'Institution:\s*(.*)', text)
    
    extracted_data = {
        'name': name.group(1) if name else 'Not Found',
        'date': date.group(1) if date else 'Not Found',
        'course': course.group(1) if course else 'Not Found',
        'institution': institution.group(1) if institution else 'Not Found',
    }
    return extracted_data
