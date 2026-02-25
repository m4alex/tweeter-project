const tweetInput = document.getElementById("tweetInput");
const tweetButton = document.getElementById("tweetButton");
const charCount = document.getElementById("charCount");

const maxLength = 160;

function updateCharacterCount() {
    const currentLength = tweetInput.value.length;
    const remaining = maxLength - currentLength;

    if (currentLength > maxLength) {
        tweetButton.disabled = true;
        charCount.textContent = "Error: Tweet exceeds the 160-character limit.";
        charCount.style.color = "red";
    } else {
        tweetButton.disabled = false;
        charCount.textContent = remaining + " characters remaining";
        charCount.style.color = "black";
    }
}

tweetInput.addEventListener("input", updateCharacterCount);