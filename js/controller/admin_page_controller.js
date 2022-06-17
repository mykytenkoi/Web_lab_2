import container from "../model/model.js";
import renderer from "../view/admin_page_view.js"
class ArticlesManager {
    constructor() {
        this.add_btn = document.getElementById('add_btn');
        this.delete_btn = document.querySelectorAll(".delete_btn");

        this.ConstructAddBtn();
        this.ConstructDeleteBtn();
    }
    
    ConstructAddBtn() {
        this.add_btn.addEventListener("click", () => {
            if(document.getElementById("title").value && document.getElementById("article").value && document.getElementById("short").value) {
                container.AddArticle(document.getElementById("title").value, document.getElementById("article").value, document.getElementById("short").value);
                renderer.AddArticle();
            }
            else
                alert("Fill in all the fields. The reader will find it more interesting.");
        });
    }

    ConstructDeleteBtn() {
        this.delete_btn.forEach((btn, idx) => { btn.addEventListener("click", () => {
            container.ideas.slice(idx, 1);  
            location.reload();
        }) 
        });
    }
}

let controller = new ArticlesManager();
export default controller;