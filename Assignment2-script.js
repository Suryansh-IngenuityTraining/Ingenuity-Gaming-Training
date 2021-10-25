var listInput = document.querySelector(".list-input");
      var listButton = document.querySelector(".list-button");
      var listList = document.querySelector(".list-list");

      window.onload = function x() {
        if (localStorage.getItem("listlist")) {
          listList.innerHTML = localStorage.getItem("listlist");
        }
      };

      listButton.onclick = create;
      listList.onclick = checkdelete;

      function create(e) {
        e.preventDefault();
        if (listInput.value === "") {
          alert("Write some text.");
        } else {
          var newDiv = document.createElement("div");
          newDiv.classList.add("list");

          var newLi = document.createElement("li");
          newLi.classList.add("list-item");
          newLi.innerHTML = listInput.value;
          listInput.value = "";
          listInput.focus();
          newDiv.appendChild(newLi);

          var checkbtn = document.createElement("button");
          checkbtn.classList.add("chk-btn");
          checkbtn.innerHTML = '<i class="fa fa-strikethrough"></i>';
          newDiv.appendChild(checkbtn);

          var deletebtn = document.createElement("button");
          deletebtn.classList.add("delete-btn");
          deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
          newDiv.appendChild(deletebtn);
          listList.appendChild(newDiv);

          // localStorage
          localStorage.setItem("listlist", listList.innerHTML);
        }
      }

      function checkdelete(e) {
        var item = e.target;
        if (item.classList[0] === "delete-btn") {
          var parent = item.parentNode;
          parent.remove();
        }
        localStorage.setItem("listlist", listList.innerHTML);
        if (item.classList[0] === "chk-btn") {
          var parent = item.parentNode;
          parent.classList.toggle("completed");
        }
      }
