function toggleLampu(lampuIndex) {
    const lampu = document.getElementById(`lampu${lampuIndex}`);
    const toggle = document.getElementById(`toggle${lampuIndex}`);
    if (toggle.checked) {
        lampu.src = 'Assets/Images/on.png'; // Set image source to 'on.png'
        lampu.classList.remove('blinking');
    } else {
        lampu.src = 'Assets/Images/off.png'; // Set image source to 'off.png'
        lampu.classList.add('blinking');
    }
}