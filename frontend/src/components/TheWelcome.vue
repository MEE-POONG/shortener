<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
import Swal from 'sweetalert2'

// state
const origUrl = ref('')
const shortUrl = ref(null)

// methods
const submit = async () => {
  shortUrl.value = null
  try {
    const { data } = await axios({
      method: 'post',
      url: 'https://shortener.meetanggroup.com/api/short',
      data: {
        origUrl: origUrl.value
      }
    })
    shortUrl.value = data.shortUrl
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'ลิงค์ของคุณไม่ถูกต้อง!'
    })
  }
}

</script>

<template>
  <div class="container order" style="border-radius: 24px;">
    <div class="facebook-page order">
      <div class="text">
        <h1>THPSD</h1>
        <p>ย่อลิงค์ ฟรี !</p>
        <p>รวดเร็ว ปลอดภัย ไม่หมดอายุ</p>
        <p>เครื่องมือย่อ URL สะดวก และรวดเร็ว ที่สุด !</p>
        <span> <span style="color: #1877F2;">THPSD</span> อนุญาตให้ลดลิงก์แบบยาวจาก Facebook, YouTube, Google Drive,
          Tiktok, Twitter, Linked In และไซต์ชั้นนำบนอินเทอร์เน็ตเพียงวาง URL แบบยาวแล้วคลิกปุ่ม ยืนยัน ในหน้าจอให้คัดลอก
          URL ที่ย่อและแบ่งปันบนเว็บไซต์แชทและอีเมล ลิงค์ไม่เสีย โหลดรวดเร็ว ปลอดภัย และลิงค์ไม่มีหมดอายุ</span>
      </div>
      <form @submit.prevent="submit">
        <input v-model="origUrl" type="text" placeholder="ลิงค์ของคุณ" required>
        <input v-if="shortUrl !== null" v-model="shortUrl" type="text" placeholder="ลิงค์ของคุณ" readonly disabled>
        <div class="link">
          <button type="submit" class="login">ยืนยัน</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Kanit', sans-serif;
}

.order {
  display: flex;
  align-items: center;
}

.container {
  padding: 0 15px;
  min-height: 90vh;
  justify-content: center;
  background: #fff;
}

.facebook-page {
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}

.facebook-page .text {
  margin-bottom: 90px;
  margin-right: 90px;
}

.facebook-page h1 {
  color: #1877f2;
  font-size: 4rem;
  margin-bottom: 10px;
}

.facebook-page p {
  font-size: 1.75rem;
  white-space: nowrap;
}

form {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

form input {
  height: 55px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 1rem;
  padding: 0 14px;
}

form input:focus {
  outline: none;
  border-color: #1877f2;
}

::placeholder {
  color: #777;
  font-size: 1.063rem;
}

.link {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
}

.link .login {
  border: none;
  outline: none;
  cursor: pointer;
  background: #1877f2;
  padding: 15px 0;
  border-radius: 6px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  transition: 0.2s ease;
}

.link .login:hover {
  background: #0d65d9;
}

form a {
  text-decoration: none;
}

.link .forgot {
  color: #1877f2;
  font-size: 0.875rem;
}

.link .forgot:hover {
  text-decoration: underline;
}

hr {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 20px;
  margin-top: 20px;
}

.button {
  margin-top: 25px;
  text-align: center;
  margin-bottom: 20px;
}

.button a {
  padding: 15px 20px;
  background: #42b72a;
  border-radius: 6px;
  color: #fff;
  font-size: 1.063rem;
  font-weight: 600;
  transition: 0.2s ease;
}

.button a:hover {
  background: #3ba626;
}

@media (max-width: 900px) {
  .facebook-page {
    flex-direction: column;
    text-align: center;
  }

  .facebook-page .text {
    margin-right: 0px;
    margin-bottom: 30px;
    width: 70vw;
  }
}

@media (max-width: 460px) {
  .facebook-page h1 {
    font-size: 3.5rem;
  }

  .facebook-page p {
    font-size: 0.8rem;
  }

  .facebook-page .text {
    margin-right: 0px;
    width: 70vw;
  }

  .facebook-page span {
    font-size: 0.5rem;
  }

  form {
    padding: 15px;
  }
}
</style>
