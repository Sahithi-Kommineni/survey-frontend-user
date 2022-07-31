<template>
  <div class="create__survey">
    <div class="survey__question">
      <h1 class="thankyou">Your response has been recorded</h1>
    </div>
  </div>
</template>
<style>
.create__survey {
  padding: 5px 20px 0 20px;
  background-color: var(--darkBlack);
  min-height: 100vh;
  max-height: auto;
}
.thankyou {
  color: var(--white);
  text-align: center;
}
.survey__question {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--lightGreen);
  margin: 15px 0;
  padding: 10px 10px 0px 10px;
  box-shadow: 0px 10px 30px #2a2a2a6c;
  border-radius: 5px;
}

</style>
