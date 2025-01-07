<!-- pages/login.vue -->
<template>
  <div style="margin: auto; max-width: 500px; text-align: center">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Email</label>
        <input type="email" v-model="email" required />
      </div>

      <div>
        <label>Password</label>
        <input type="password" v-model="password" required />
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>

      <p v-if="error">{{ error }}</p>
    </form>

    <p>Don't have an account? <NuxtLink to="/signup">Sign Up</NuxtLink></p>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("rishigandhi021@gmail.com");
const password = ref("Rishi@123");
const error = ref(null);
const loading = ref(false);

const handleLogin = async () => {
  try {
    loading.value = true;
    error.value = null;

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (loginError) throw loginError;

    // Redirect to Confirm Page to check user info
    navigateTo("/confirm");
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Redirect if already logged in
onMounted(() => {
  if (user.value) {
    navigateTo("/");
  }
});
</script>