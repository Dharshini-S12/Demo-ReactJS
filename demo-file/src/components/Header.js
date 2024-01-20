import React from 'react'

function Header() {

    function myFunction() {
        document.getElementById('hello').innerHTML="You clicked Me";
        var x = document.getElementById("myDIV");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  return (
    <div>
        <h1>hello</h1>
        
        <button onClick={myFunction} id='hello'>Try it</button>
        <div id="myDIV">
          This is my DIV element.
        </div>
    </div>
  )
}

export default Header