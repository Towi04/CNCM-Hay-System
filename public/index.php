<?php include 'includes/header.php'; ?>

<div class="container d-flex align-items-center justify-content-center" style="min-height: 100vh;">
    <div class="card shadow-lg p-4" style="width: 100%; max-width: 400px; border-radius: 15px;">
        <div class="card-body text-center">
            
            <img src="assets/logo horizontal fondo transparente.png" alt="Logo CNCM" class="logo-cncm">
            
            <h3 class="card-title mb-4" style="color: var(--cncm-blue-light); font-weight: bold;">Administración</h3>
            
            <form action="dashboard.php" method="POST">
                <div class="mb-3 text-start">
                    <label class="form-label">Correo Institucional</label>
                    <input type="email" name="email" class="form-control" placeholder="tu.correo@cncm.edu.mx" required>
                </div>
                <div class="mb-3 text-start">
                    <label class="form-label">Contraseña</label>
                    <input type="password" name="password" class="form-control" placeholder="********" required>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-danger" style="background-color: var(--cncm-red);">Iniciar Sesión</button>
                </div>
            </form>
            
        </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
