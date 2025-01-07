<template>
  <div style="max-width: 700px; margin: auto">
    <h1>Home</h1>
    <p>{{ user?.email }}</p>
    <p>{{ user?.phone }}</p>

    <div>{{ user }}</div>

    <button @click="logoutUser">Logout</button>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, aut autem
      tenetur repellendus dolor, commodi officiis ipsa inventore provident
      adipisci atque error velit obcaecati! Veritatis ducimus vero doloremque
      blanditiis quis.
    </p>
  </div>
</template>

<script  setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logoutUser = async () => {
  await supabase.auth.signOut();
  navigateTo("/login");
};
</script>

<style>
</style>