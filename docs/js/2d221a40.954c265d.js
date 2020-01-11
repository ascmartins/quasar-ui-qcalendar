(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d221a40"],{cae1:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-splitter\n      v-model="splitterModel"\n      :limits="[30, 100]"\n      emit-immediately\n    >\n      <template v-slot:before>\n        <q-calendar\n          ref="calendar"\n          v-model="selectedDate"\n          view="month"\n          locale="en-us"\n          :mini-mode="miniMode"\n        />\n      </template>\n      <template v-slot:separator>\n        <q-avatar color="primary" text-color="white" size="40px" icon="drag_indicator" />\n      </template>\n      <template v-slot:after>\n        <div style="min-width: 20px"></div>\n      </template>\n    </q-splitter>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      splitterModel: 90,\n      selectedDate: \'\',\n      miniMode: false\n    }\n  },\n  watch: {\n    splitterModel (val) {\n      const rect = this.$refs.calendar.$el.getBoundingClientRect()\n      this.miniMode = rect.width < 500\n    }\n  }\n}\n<\/script>\n'}}]);