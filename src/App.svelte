<script>
	import { Router, Route, Link } from "svelte-routing";
	import Main  from "./pages/MainPage.svelte";
	import ContactUs from "./pages/ContactUs.svelte";
	export let url = "";

	let logo = './images/mato_logo.jpg';
	let logo_name = 'Mato';
</script>


<Router url="{url}">
	<div class="header-div">
		<div class="logo-component">
			<img src={logo} alt="{logo_name}" class="logo-main">
		</div>
		
		<nav class="nav-bar">
			<li><Link to="/">Home</Link></li>
			<li><Link to="contactus">Contact Us</Link>
			</li>
		</nav>
	</div>
	
	<div>
		<Route path="contactus" component="{ContactUs}" /> 
		<Route path="/"><Main /></Route>
	</div>
 </Router>
