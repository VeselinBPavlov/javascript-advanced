function spawnConfirm() {
    log('Spawning Confirm dialog');
    let callback = (params) => {
        log('Clicked OK');
    };
    let dialog = new Dialog("Test Dialog, containing OK and Cancel buttons.", callback);
    dialog.render();
}

function spawnInput() {
    log('Spawning Input dialog');
    let callback = (params) => {
        log(`Params: {${Object.keys(params).map(k => k + ': ' + params[k]).join(', ')}}`);
    };
    let dialog = new Dialog("Dialog, containing message text and input field.", callback);
    dialog.addInput('Name', 'name', 'text');
    dialog.render();
}

function log(text) {
    document.getElementById('output').textContent += text + '\n';
}