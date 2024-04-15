import { useEffect, useState } from "react";
import updateCursorEvents from "../../cursor";

function Hamburger() {
    var [bookmarks, setBookmarks] = useState([])
    var [ids, setIds] = useState([])
    
    useEffect(() => {
        let bookmark = JSON.parse(localStorage.getItem("bookmark"));
        if(!bookmark) return
        let bookmarkList = []
        let idList = [];
        let navHam = document.getElementById("hamburger");
        navHam.addEventListener("click", toggleHamburger)
        for(const [key, values] of Object.entries(bookmark)) {
            bookmarkList.push(values.title);
            idList.push(values.id);
        }
        setBookmarks(bookmarkList);
        setIds(idList)
        updateCursorEvents()
    }, [])

    function toggleHamburger() {
        let ham = document.querySelector("#hamburgerpopup");
        if (ham.style.display === "none") {
            ham.style.display = "grid";
            ham.style.opacity = 1;
          } else {
            ham.style.opacity = 0;
            ham.style.display = "none";
          }
    }

    function removeBookmark(id) {
        let bookmark = JSON.parse(localStorage.getItem("bookmark"));
        delete bookmark[id];

        let bookmarkList = []
        let idList = [];
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
        for(const [key, values] of Object.entries(bookmark)) {
            bookmarkList.push(values.title);
            idList.push(values.id);
        }
        setBookmarks(bookmarkList);
        setIds(idList)

    }

    return (
        <div id="hamburgerpopup" class="hamburger">
            <div id="closeHamburger" onClick={() => toggleHamburger()}>
                <button><img width="50" height="50" src="https://img.icons8.com/ios/50/multiply.png" alt="multiply"/></button>
            </div>
            <div>
                <div class="hamburger__left animate-hidden delayed">
                    {bookmarks.length>0? <h1>bookmarks</h1> : <h1>you have no bookmarks</h1>}
                    {
                    bookmarks.map( (bookmark, index) => {
                        return <div data-cursor={index%2?"pointer2":"pointer"} key={index} className="bookmark-elements glass"> <h3 key={ids[index]}>{bookmark}</h3> <img onClick={() => removeBookmark(ids[index])} width="50" height="50" src="https://img.icons8.com/ios/50/000000/multiply.png" alt="multiply"/> </div>
                    } )}
                </div>

                <div class="hamburger__right animate-hidden delayed">
                    <div>
                    <h1 className="animate-ltr-hidden delayed">discover</h1> 
                    <h1 className="animate-ltr-hidden delayed">about us</h1> 
                    <h1 className="animate-ltr-hidden delayed">contact us</h1> 
                    </div>
                    <div class="icons">
                <a href="" class="ham__icon animate-btt-hidden"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="" class="ham__icon animate-btt-hidden"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="" class="ham__icon animate-btt-hidden"><ion-icon name="logo-octocat"></ion-icon></a>
                <a href="" class="ham__icon animate-btt-hidden"><ion-icon name="logo-whatsapp"></ion-icon></a>
        
    </div>

                </div>
            </div>

        </div>

    )
}

export default Hamburger;