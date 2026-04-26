<script>
  function handleLogin() {
    // For token-based authentication, redirect directly to CMS
    window.location.href = '/admin/cms';
  }
</script>

<svelte:head>
  <title>Admin Login - ASV Rotauge</title>
</svelte:head>

<div class="login-container">
  <div class="login-card">
    <h1 class="login-title">Admin Login</h1>
    <p class="login-subtitle">Melden Sie sich an, um auf das Content-Management-System zuzugreifen.</p>
    
    <button on:click={handleLogin} class="login-button">Zum CMS</button>
  </div>
</div>

<style>
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e9ecef;
    padding: 1rem;
    padding-top: 82px;
  }

  .login-card {
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    max-width: 400px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-title {
    font-size: 2rem;
    font-weight: 700;
    color: #2d5a3d;
    margin-bottom: 0.5rem;
  }

  .login-subtitle {
    color: #343a40;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .login-button {
    background: #2d5a3d;
    color: white;
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .login-button:hover {
    background: #1e3d29;
  }
</style>
