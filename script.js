// Step 1: Get reference to the posts container
const postsContainer = document.getElementById("posts");

// Step 2: Load posts from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadPosts);

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach((post) => {
    createPostElement(post.title, post.content);
  });
}

// Step 3: Function to add a new blog post
function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title.trim() === "" || content.trim() === "") {
    alert("Please enter both title and content.");
    return;
  }

  // Step 4: Create a new post element and add it to the DOM
  createPostElement(title, content);

  // Step 5: Save the post to local storage
  savePostToLocalStorage(title, content);

  // Step 6: Clear the input fields
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

// Step 7: Function to create a post element
function createPostElement(title, content) {
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

  // Step 8: Add the new post to the container
  postsContainer.prepend(postDiv);
}

// Step 9: Function to save a post to local storage
function savePostToLocalStorage(title, content) {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push({ title, content });
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Step 10: Function to edit an existing post
function editPost(button) {
  const postDiv = button.parentElement.parentElement;
  const title = postDiv.querySelector("h2").textContent;
  const content = postDiv.querySelector("p").textContent;

  // Step 11: Fill the form with existing data
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;

  // Step 12: Remove the existing post from the list and local storage
  postDiv.remove();
  removePostFromLocalStorage(title, content);
}

// Step 13: Function to delete a post
function deletePost(button) {
  const postDiv = button.parentElement.parentElement;
  const title = postDiv.querySelector("h2").textContent;
  const content = postDiv.querySelector("p").textContent;

  // Step 14: Remove the post from the DOM and local storage
  postDiv.remove();
  removePostFromLocalStorage(title, content);
}

// Step 15: Function to remove a post from local storage
function removePostFromLocalStorage(title, content) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts = posts.filter(
    (post) => post.title !== title || post.content !== content
  );
  localStorage.setItem("posts", JSON.stringify(posts));
}
