// Copy contract address to clipboard
function copyContract() {
    const contractAddress = 'csRfwLxCrmMnPs8DeqmLkdZzgyv4ZhUwNH5TnHhpump';
    
    // Use the Clipboard API
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Show success feedback
        showToast();
        updateCopyButton();
    }).catch(err => {
        // Fallback for older browsers
        fallbackCopy(contractAddress);
    });
}

// Show toast notification
function showToast() {
    const toast = document.getElementById('toast');
    toast.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        toast.style.transform = 'translateY(128px)';
    }, 2000);
}

// Update copy button text temporarily
function updateCopyButton() {
    const copyText = document.getElementById('copy-text');
    const originalText = copyText.textContent;
    
    copyText.textContent = 'Copied!';
    
    setTimeout(() => {
        copyText.textContent = originalText;
    }, 2000);
}

// Fallback copy method for older browsers
function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast();
        updateCopyButton();
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please copy manually: ' + text);
    }
    
    document.body.removeChild(textArea);
}


