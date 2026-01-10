function updateCopyright() {
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Date().toLocaleString();
    
    const copyrightText = `&copy; ${currentYear}. - PENNY HALEY - All rights reserved.`;
    const lastUpdatedText = `Last updated: ${lastUpdated}`;
    
    const copyrightEl = document.getElementById('copyright');
    const lastUpdatedEl = document.getElementById('last-updated');
    
    if (copyrightEl) copyrightEl.innerHTML = copyrightText;
    if (lastUpdatedEl) lastUpdatedEl.innerHTML = lastUpdatedText;
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateCopyright);