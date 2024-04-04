<script lang="ts">
import { popEffect } from '@src/lib/animations/popEffect.js'

const back = (e: MouseEvent) => {
    popEffect(e)
    setTimeout(() => {
        if (document.referrer && document.referrer.includes('mysite.com')) {
            history.back()
        } else {
            location.href = '/'
        }
    }, 500)
}
</script>

<div class="flex justify-between flex-col sm:flex-row sm:content-start">
    <button on:click="{back}">
        <span class="tf">👈</span> 목록으로 돌아가기
    </button>
    <button on:click="{popEffect}" class="sm:mt-0 mt-2 relative">
        <span class="tf pointer-events-none">😁</span> 부족한 글 읽어주셔서 감사합니다
    </button>
</div>
