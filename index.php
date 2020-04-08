<?php include ('baseDatos.php') ?>

<?php include ('includes/header.php') ?>

<div class="container p-4">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-body">
                <!-- <form action="guardar.php" method="POST" onclick=""> -->
                <input type="number" id="precio" name="precio" class="form-control" placeholder="Importe" autofocus /><br>  
                <div id="productos"></div>
                <!-- </form> -->
            </div>
        </div>


        <div class="col-md-8" style="margin-top:1em">  <!-- Este es el campo donde figura el TOTAL -->
            <div class="bg-light mb-12" style="border: 1px solid lightblue;">
                    <div style="background-color: #6161ff ; padding:5px; color:white; padding:10px;">Total $</div>
                <div>
                    <div class="card-body"><h1 class="card-title" style="text-align:center;"> $<b id="carrito_total">0</b></h1></div>
                </div>
        </div> <br>
        <form action="guardar.php" method="POST" id="carrit">
            <button class="btn btn-outline-success">Enviar comprobante</button>
            <ul id="carrito"></ul>      
        </form>
    </div>
</div>   



<?php include ('includes/footer.php') ?>
