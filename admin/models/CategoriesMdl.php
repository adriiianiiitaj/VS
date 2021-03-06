<?php
	require_once('StandardMdl.php');
	require_once('DataBase.php');

	class CategoriessMdl extends StandardMdl {
		public $connection;
		public $_query;

		function __construct(){
			parent::__construct();
			$this->connection = DataBase::getInstance();
		}

		function create() {

		}

		function getAll() {
			$_query = 'SELECT * FROM categories';
			$categories = $this->connection->execute($_query)->getResult();
			return $categories;
		}

		function getOne($id) {
			$_query = 'SELECT * FROM categories 
					   		WHERE id="'.$id.'"';
			$category = $this->connection->execute($_query)->getFirst();
			return $category;
		}

		function delete($id) {
			$_query = 'DELETE FROM categories 
					   		WHERE id="'.$id.'"';
			$category = $this->connection->execute($_query)->getResult();
			return $category;
		}

		function update($id,$code,$name,$description,$image) {
			$_query = 'UPDATE categories SET 
								code = "'.$code.'",
								name = "'.$name.'",
								description = "'.$description.'",
								image = "'.$image.'" 
					   		WHERE id="'.$id.'"';
			$category = $this->connection->execute($_query);
			//return $category;
		}
	}
?>