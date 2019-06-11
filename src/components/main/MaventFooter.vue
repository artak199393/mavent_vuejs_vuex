<template>
    <footer>
		<b-container class="bv-example-row text-center">
			<img src="./../../assets/MAVent2.png" class="img-fluid">
			<p>Торговая марка «MAVENT»<br>© 2013-2017 Все права защищены законом.</p>
		</b-container>
	</footer>
</template>

<script>

export default {
    name: 'MaventFooter'
  
}
</script>

<style>
	footer {
		background: url("./../../assets/futer.png") no-repeat center;
		-webkit-background-size: cover;
				background-size: cover;
		padding: 64px 0; 
	}

	footer img {
		margin: 7px 0 0 11px; 
	}

	footer p {
		color: white;
		font-size: 12px;
		line-height: 18px;
		margin: 25px 0 0 20px; 
	}

</style>