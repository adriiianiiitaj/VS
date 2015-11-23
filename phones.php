<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<!--[if lt IE 9]>
      <script src="js/vendor/html5-3.6-respond-1.4.2.min.js"></script>
  <![endif]-->
  
  <link rel="stylesheet" href="css/owl.theme.css">
  <link rel="stylesheet" href="css/owl.transitions.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<?php 
    require_once('views/menu.html');
  ?>
  <div class="container">
    <!-- Modal -->
    <div id="deleteItem" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header modal-header-skyblue">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Delete Phone</h4>
          </div>
          <div class="modal-body">
            <p>Are you sure yo want to delete this element?</p>
          </div>
          <div class="modal-footer modal-footer-white">
            <button type="button" class="btn btn-green" data-dismiss="modal"> <i class="fa fa-check"></i> OK</button>
            <button type="button" class="btn btn-red" data-dismiss="modal"> <i class="fa fa-ban"></i> Cancel</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal -->
    <div id="modal-new-phone" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header modal-header-skyblue">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <form class="form" method="post" role="form" onsubmit="return validate()" data-validate>
              <div class="form-group">
                <p>Introduce your phone number.</p>
              </div>

              <div class="form-group">
                <label for="phone"> Phone </label>
                <input class="form-control" type="tel" name="phone" placeholder="Phone" data-phone data-required/>
              </div>

              <div class="form-group">
                <label for="area">Area Code </label>
                <input class="form-control" type="number" name="area" data-required data-lada placeholder="Area Code"/>
              </div>

              <div class="form-group">
                <button class="btn btn-orange" type="submit"><i class="fa fa-check"></i> Save </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container height-80 padding">
    <div class="row">
      <div class="col-md-6">
        <h2>Phones</h2>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-orange pull-right" data-toggle="modal" data-target="#modal-new-phone"> <i class="fa fa-plus"></i> Add phone</button>
      </div>
    </div>
    <div class="row">
      <section>
        <table class="table table-bordered table-condensed table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Phone</th>
              <th>Area Code</th>
              <th>Actions</th> <!-- -->
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <a href="#" class="btn btn-skyblue margin-right-15"><i class="fa fa-pencil"></i> Edit</a>
                <a href="#" class="btn btn-skyblue" data-toggle="modal" data-target="#deleteItem"><i class="fa fa-trash-o"></i> Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>

  <footer>
    <nav class="col-md-3" id="social-icons">
      <ul>
        <li><a href="https://www.facebook.com/"><img class="social-icon" src="img/fb.png"></a></li>
        <li><a href="https://twitter.com/"><img class="social-icon" src="img/tw.png"></a></a></li>
        <li><a href="https://www.google.com.mx/"><img class="social-icon" src="img/gg.png"></a></a></li>
        <li><a href="contacto.php"><img class="social-icon" src="img/mail.png"></a></a></li>
      </ul>
    </nav>
  </footer>  
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>')</script>
  <script src="js/vendor/bootstrap.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/main.js"></script>
  <script src="js/validator.js"></script>     
</body>
</html>