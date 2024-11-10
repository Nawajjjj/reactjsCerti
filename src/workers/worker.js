const workerRef = useRef(null);

useEffect(() => {
  // Make sure the worker is created properly
  workerRef.current = new Worker('./workers/worker.js');

  // Cleanup worker when the component is unmounted
  return () => {
    if (workerRef.current) {
      workerRef.current.terminate();
    }
  };
}, []);
