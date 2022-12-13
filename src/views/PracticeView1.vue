<script setup>
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

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

const { width } = useWindowSize()

console.log(txtW.value)

const windowW = computed(() => {
  return width
})

onMounted(() => {
  useResizeObserver(txt, (entries) => {
    const entry = entries[0]
    const { width } = entry.contentRect
    txtW.value = width
  })
  // const timeline = gsap.timeline()
  // timeline
  //   .to('.box', {
  //     duration: 100,
  //     rotate: -360,
  //     repeat: -1,
  //     ease: 'none',
  //   })
  // .fromTo('.first', {
  //   xPercent: 100,
  //   duration: 30,
  //   ease: 'none',
  //   repeat: -1,
  // }, {
  //   xPercent: -300,
  //   duration: 30,
  //   ease: 'none',
  //   repeat: -1,
  // }, '<')
  // .fromTo('.second', {
  //   xPercent: 100,
  //   duration: 30,
  //   ease: 'none',
  //   repeat: -1,
  // }, {
  //   xPercent: -300,
  //   duration: 30,
  //   ease: 'none',
  //   repeat: -1,
  // }, '<')
})
</script>

<template lang="pug">
.page
  p {{ width }} / {{ txtW.value }} / {{ windowW }}
  .marquee
    .marqueeBox
      .first
        .txt(ref="txt") インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科
      //- .second インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科&nbsp;&nbsp;&nbsp;&nbsp;インプラント治療、矯正治療、セラミック等の審美歯科、ホワイトニングは近江八幡のクラウド歯科
  .box
    .pic(
      v-for="(item, index) in imgList"
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
    white-space: nowrap
    .first, .second
      display: inline-block
      margin: 0 10px
    .first
      color: red
    .second
      color: blue
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
        width: 530px

    $max: 28
    @for $i from 2 through $max
      .pic#{$i}
        transform: rotate(calc(360deg / $max) * ($i - 1))
</style>
