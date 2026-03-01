<?php 
  // Aquí podemos validar si el usuario ya inició sesión más adelante
  $nombre_usuario = "Juan Pérez";
  $plantel_actual = "Salamanca";
?>

<?php include 'includes/header.php'; ?>
<?php include 'includes/sidebar.php'; ?>

<div id="content">
    <div class="container-fluid">
        <h2>Bienvenido, <?php echo $nombre_usuario; ?></h2>
        <p>Estás trabajando en el plantel: <strong><?php echo $plantel_actual; ?></strong></p>
        
        <div class="row mt-4">
            </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
