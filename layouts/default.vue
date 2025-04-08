<template>
    <div>
      <!-- Global Navbar -->
      <header class="fixed w-full bg-white/90 backdrop-blur-md shadow z-[999]">
        <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <img src="/public/logo.png" alt="Logo" class="h-8 w-8 object-contain" />
            <h1 class="text-2xl font-extrabold tracking-wide text-gray-900 uppercase">St. Austins</h1>
          </div>
          <ul class="hidden md:flex space-x-10 text-sm font-semibold uppercase">
            <li><NuxtLink to="/" class="text-gray-800 hover:text-orange-600 transition">Home</NuxtLink></li>
            <li><a href="#about" class="text-gray-800 hover:text-orange-600 transition">About</a></li>
            <li><a href="#services" class="text-gray-800 hover:text-orange-600 transition">Services</a></li>
            <li><NuxtLink to="/clients" class="text-gray-800 hover:text-orange-600 transition">Clients</NuxtLink></li>
            <li><NuxtLink to="/team" class="text-gray-800 hover:text-orange-600 transition">Meet the Team</NuxtLink></li>
            <li><NuxtLink to="/events" class="text-gray-800 hover:text-orange-600 transition">Events</NuxtLink></li>
            <li><a href="#contact" class="text-gray-800 hover:text-orange-600 transition">Contact</a></li>
          </ul>
        </nav>
  
      </header>
  
      <!-- Page Content Goes Here -->
      <NuxtPage />
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white text-center py-8 mt-20">
        <p class="text-sm">&copy; {{ new Date().getFullYear() }} St. Austins Service Centre. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  const year = new Date().getFullYear()
  </script>
  