<script setup>
import gsap from 'gsap'

const imgList = ref([
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv1_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv2_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv3_pc.webp',
  'https://cloud-dental-clinic.com/assets/img/top/kv4_pc.webp',
])
const txt = ref(null)
const txtW = ref(0)
const marqueeBox = ref(null)

const { width } = useWindowSize()

useResizeObserver(txt, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  txtW.value = width
})

const windowW = computed(() => {
  return txtW.value ? Math.ceil(width.value / txtW.value) : 1
})

onMounted(() => {
  const timeline = gsap.timeline()
  timeline
    .to('.box', {
      duration: 100,
      rotate: -360,
      repeat: -1,
      ease: 'none',
    })
    .to('.marqueeBox', {
      xPercent: -100,
      duration: 20,
      ease: 'none',
    }, '<')
    .set('.marqueeBox', {
      xPercent: -50,
      ease: 'none',
      duration: 0,
    })
    .to('.marqueeBox', {
      xPercent: -100,
      duration: 10,
      ease: 'none',
      repeat: -1,
    })
})
</script>

<template lang="pug">
.page
  .marquee
    .marqueeBox(:style="{ left: `${width}px` }")
      .first
        .txt(ref="txt") インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科&nbsp;&nbsp;&nbsp;&nbsp;
        .txt(v-for="index in windowW - 1") インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科&nbsp;&nbsp;&nbsp;&nbsp;
      .second
        .txt インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科&nbsp;&nbsp;&nbsp;&nbsp;
        .txt(v-for="index in windowW - 1") インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科&nbsp;&nbsp;&nbsp;&nbsp;
  .box
    .pic(
      v-for="(item, index) of imgList"
      :class=`"pic"+(index+1)`
    )
      img(:src='item')
</template>

<style lang="sass" scoped>
.page
  width: 100%
  height: 850px
  overflow: hidden
  position: relative
  .marquee
    width: 100%
    .marqueeBox
      position: relative
      display: inline-flex
      .first, .second
        display: inline-block
        white-space: nowrap
        .txt
          display: inline-block
  .box
    width: 300vw
    height: 300vw
    border-radius: 50%
    position: absolute
    left: 50%
    top: 15%
    transform: translateX(-50%)
    .pic
      width: 100%
      height: 100%
      position: absolute
      img
        position: absolute
        left: 50%
        transform: translateX(-50%)
        width: 8.5%

    $max: 28
    @for $i from 2 through $max
      .pic#{$i}
        transform: rotate(calc(360deg / $max) * ($i - 1))
</style>
