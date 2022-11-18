import React, { useState, useEffect } from 'react';

function useHeader() {
  const [headerHeight, setHeaderHeight] = useState("");

  useEffect(() => {
    setHeaderHeight(getHeaderHeight())
  })

  function getHeaderHeight() {
    const mainHeader = document.getElementById('mainHeader')
    if (mainHeader) {
      return mainHeader.clientHeight + "px"
    } else {
      return ""
    }
  }

  return { headerHeight }

}

export default useHeader