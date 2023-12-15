import React, { useState, useEffect, useCallback } from 'react';
 
const App = () => {
  const [textValues, setTextValues] = useState({
    textName: 'CHRISTOPHER OLADIMEJI',
    text876: 'On',
    textDate: '12/20/2023',
    textName1: 'CHRISTOPHER OLADIMEJI',
    textDescription1: 'Successfully Completed',
    textDescription2: 'OSHA 30-Hr Outreach Training for the Construction Industry.',
    
     
    // ... other default values for text elements ...
  });
 
  const handleTextChange = (id, value) => {
    setTextValues(prev => ({ ...prev, [id]: value }));
  };
 
  const updateSVGText = useCallback(() => {
    const svgObject = document.getElementById('edwardSvg');
    if (svgObject && svgObject.contentDocument) {
      const svgDocument = svgObject.contentDocument;
 
      Object.entries(textValues).forEach(([id, value]) => {
        const textElement = svgDocument.getElementById(id);
        if (textElement) textElement.textContent = value;
      });
    }
  }, [textValues]);
 
  useEffect(() => {
    updateSVGText();
  }, [updateSVGText]);
 
  const resetToDefault = () => {
    setTextValues({
      textName: 'CHRISTOPHER OLADIMEJI',
      text876: 'On',
      textDate: '12/20/2023',
      textName1: 'CHRISTOPHER OLADIMEJI',
      textDescription1: 'Successfully Completed',
      textDescription2: 'OSHA 30-Hr Outreach Training for the Construction Industry.',
    
     
      // ... other default values for text elements ...
    });
  };
 
  return (
    <div>
      <object id="edwardSvg" type="image/svg+xml" data="./Edward.svg" width="497mm" height="355mm">
        Your browser does not support SVG
      </object>
 
      {/* Form for updating text */}
      <form>
        {Object.entries(textValues).map(([id, value]) => (
          <label key={id}>
            {id}:
            <input type="text" value={value} onChange={(e) => handleTextChange(id, e.target.value)} />
          </label>
        ))}
      </form>
 
      <button onClick={updateSVGText}>Update Text</button>
      <button onClick={resetToDefault}>Reset to Default</button>
    </div>
  );
};
 
export default App;
