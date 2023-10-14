import React from "react";
import ColorPicker from "./Colorpicker";

const App = () => {
  const colors = ["red","green","blue","yellow","purple","orange","pink","brown","cyan","teal","magenta","violet","lime","indigo","lavender","turquoise","maroon","gold","silver",];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
