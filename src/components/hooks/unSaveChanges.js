import React, { useState, useEffect } from "react";
import { Prompt } from "gatsby"; // Import Prompt from gatsby

const UnsavedChanges = (message = "Are you sure you want to leave?") => {
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    window.onbeforeunload = dirty && (() => message);
    return () => {
      window.onbeforeunload = null;
    };
  }, [dirty, message]);

  const routerPrompt = <Prompt when={dirty} message={message} />;

  return [routerPrompt, () => setDirty(true), () => setDirty(false)]; 
};

export default UnsavedChanges;
