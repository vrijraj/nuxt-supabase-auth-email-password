<template>
  <div>
    <h1>Confirm User....</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, aut autem
      tenetur repellendus dolor, commodi officiis ipsa inventore provident
      adipisci atque error velit obcaecati! Veritatis ducimus vero doloremque
      blanditiis quis.
    </p>
  </div>
</template>
  
  <script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

watch(
  user,
  async() => {
    if (user.value) {
      navigateTo('/')
    } else {
      navigateTo("/login");
    }
  },
  { immediate: true }
);
</script>
  
  <style>
</style>