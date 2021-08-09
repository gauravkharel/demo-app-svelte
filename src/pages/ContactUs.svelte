<script>
	import schema from './schema.js';
	let values = {};
	let errors = {};
	
		const handleSubmit  = async () => {
			try {
				await schema.validate(values, { abortEarly: false });
				alert(JSON.stringify(values, null, 2));
				errors = {};
			} catch (err) {
				errors = err.inner.reduce((acc, err) => {
					return { ...acc, [err.path]: err.message };
				}, {});
			}
		};	
	
	let title = "Contact Us";
	let description = "Want to get in touch with us or just to say hello? Use the form below."
</script>
	
<main class="contactus-div">
		<div class="title-section">
			<h1 class="main-title">{title}</h1>
			<p class="sec-title">{description} </p>
		</div>
		<form class="contact-form" on:submit|preventDefault={handleSubmit}>
			<div class="name-input">
				<label class="form-labels"  for="input">Name</label> <br>
				<input class="form-input" type="text" bind:value={values.fullname} placeholder="Gaurav Kharel"> <br />
	
				{#if errors.fullname}
					<span class="error">{errors.fullname}</span>
				{/if}
			</div>
	
			<div class="email-input">
				<label class="form-labels" for="input">Email</label> <br>
				<input class="form-input" type="text" bind:value={values.email} placeholder="the21next@gmail.com">
	
				{#if errors.email}
					<span class="error">{errors.email}</span>
				{/if}
			</div>
			
			<div class="btn-component">
				<button type="submit" class="btn btn-joinwithus">Submit</button>
			</div>
		</form>
	
</main>
		