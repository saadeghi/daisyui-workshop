<template>
  <div>

    <Wrapper title="modal using URL hash">
      <a class="btn btn-primary" :href="`/components/modal#my-modal`" v-scroll-to="{el: '#my-modal'}">open modal</a>
      <div class="modal" id="my-modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
          <div class="modal-action">
            <a class="btn btn-primary" :href="`/components/modal#`">Accept</a>
            <a class="btn" :href="`/components/modal#`">Close</a>
          </div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="modal without URL hash (using a hidden checkbox)">
      <label class="btn btn-primary modal-button" for="my-modal-2">open modal</label>
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
          <div class="modal-action">
            <label class="btn btn-primary" for="my-modal-2">Accept</label>
            <label class="btn" for="my-modal-2">Close</label>
          </div>
        </div>
      </div>
    </Wrapper>

  </div>
</template>
