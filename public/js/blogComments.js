const createNewCommentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value;
    const postId = window.location.href.split("/").pop();
    const response = await fetch('/api/blog/new-comment', {
        method: 'POST',
        body: JSON.stringify({
            blog_post_id: postId,
            comment: comment
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/blog-comments/' + postId);
    } else {
        alert('Failed to create blog post');
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', createNewCommentFormHandler);