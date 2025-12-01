import '../styles/main.scss'

// Minimal client behavior for the module (handle fake login navigation)
document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.getElementById('loginForm');
	if (loginForm) {
		loginForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const name = document.getElementById('name').value || 'Usuario';
			// store in session for demo
			sessionStorage.setItem('enf_user', name);
			// navigate to medicacion page
			window.location.href = 'medicacion.html';
		});
	}
});
