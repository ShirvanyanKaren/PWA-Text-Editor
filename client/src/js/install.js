const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
    butInstall.textContent = "Install Me!";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEv = window.deferredPrompt;
    if(!promptEv){
        return;
    }
    promptEv.prompt();
    window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
    
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    butInstall.textContent = 'Installed!';
    console.log('🤙','installed', event);
});
