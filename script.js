// Step 1: Get reference to the posts container
const postsContainer = document.getElementById("posts");

// Step 2: Function to add a new blog post
function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title.trim() === "" || content.trim() === "") {
    alert("Please enter both title and content.");
    return;
  }

  // Step 3: Create a new post element
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  postDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <div class="buttons">
            <button class="edit-btn" onclick="editPost(this)">Edit</button>
            <button class="delete-btn" onclick="deletePost(this)">Delete</button>
        </div>
    `;

  // Step 4: Add the new post to the container
  postsContainer.prepend(postDiv);

  // Step 5: Clear the input fields
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

// Step 6: Function to edit an existing post
function editPost(button) {
  // Step 7: Get post div and its title/content
  const postDiv = button.parentElement.parentElement;
  const title = postDiv.querySelector("h2").textContent;
  const content = postDiv.querySelector("p").textContent;

  // Step 8: Fill the form with existing data
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;

  // Step 9: Remove the existing post from the list
  postDiv.remove();
}

// Step 10: Function to delete a post
function deletePost(button) {
  const postDiv = button.parentElement.parentElement;
  postDiv.remove();
}
