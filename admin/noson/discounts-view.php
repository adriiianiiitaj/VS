    <?php 
      require_once('views/navigation.html');
    ?>
    <div id="page-special-prices" class="right-side">
      <div class="content">
        <div class="row">
          <div class="col-xs-12">
            <section class="panel">
              <header class="panel-heading">
                <h3>Special Price</h3>
              </header>
              <div class="panel-body">

                <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <div class="profile_img">
                      <div id="crop-avatar">
                        <!-- Current avatar -->
                        <div>
                          <img src="../img/categories/category.png" alt="Avatar" class="img-thumbnail">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-8 col-md-7 col-sm-6 col-xs-12"> 
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <th class="col-xs-5 col-sm-3 col-md-3 col-lg-2" scope="row">No.</th>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th scope="row">Code :</th>
                          <td>PAQ123-9</td>
                        </tr>
                        <tr>
                          <th scope="row">Item :</th>
                          <td>PAN456-C</td>
                        </tr>
                        <tr>
                          <th scope="row">Discount (%) :</th>
                          <td>3</td>
                        </tr>
                        <tr>
                          <th scope="row">Price :</th>
                          <td>$55.00</td>
                        </tr>
                        <tr>
                          <th scope="row">Up to (number articles) :</th>
                          <td>3</td>
                        </tr>
                        <tr>
                          <th scope="row">From :</th>
                          <td>2015/12/03</td>
                        </tr>
                        <tr>
                          <th scope="row">To :</th>
                          <td>
                            2015/12/31
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Action </th>
                          <td class=" last">
                            <a href="clothing-view.php" class="btn btn-success btn-xs"><i class="fa fa-eye"></i> View </a>
                            <a href="clothing-edit.php" class="btn btn-warning btn-xs"> <i class="fa fa-pencil"></i> Edit </a>
                            <a href="#" class="btn btn-danger btn-xs"> <i class="fa fa-eraser"></i> Delete </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <!--<div class="container-fluid" ></div>-->
    </div>
    <?php 
      require_once('views/footer.html');
    ?>
</body>
</html>