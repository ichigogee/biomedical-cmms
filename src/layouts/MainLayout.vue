<template>
  <q-layout view="hHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div class="text-weight-bold">BIOMEDICAL CMMS</div>

          <div class="text-caption">Maintenance Management System</div>
        </q-toolbar-title>

        <!-- NOTIFICATIONS -->
        <q-btn flat round icon="notifications">
          <q-badge color="negative" floating rounded> 5 </q-badge>

          <q-menu>
            <q-list style="min-width: 300px">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="build" color="orange" />
                </q-item-section>

                <q-item-section>
                  <q-item-label> PM Due </q-item-label>

                  <q-item-label caption> 22 equipment require preventive maintenance </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item>
                <q-item-section avatar>
                  <q-icon name="gps_fixed" color="purple" />
                </q-item-section>

                <q-item-section>
                  <q-item-label> Calibration Due </q-item-label>

                  <q-item-label caption> 15 equipment require calibration </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-close-pop-up to="notifications">
                <q-item-section class="text-primary text-center">
                  View all notifications
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <!-- USER -->
        <q-btn flat round icon="account_circle" />
      </q-toolbar>
    </q-header>

    <!-- LEFT NAVIGATION -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="250">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header class="text-grey-7"> MAIN </q-item-label>

          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/equipment">
            <q-item-section avatar>
              <q-icon name="inventory_2" />
            </q-item-section>

            <q-item-section> Equipment Masters </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/preventive-maintenance">
            <q-item-section avatar>
              <q-icon name="event_repeat" />
            </q-item-section>

            <q-item-section> Preventive Maintenance </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/corrective-maintenance">
            <q-item-section avatar>
              <q-icon name="build" />
            </q-item-section>

            <q-item-section> Corrective Maintenance </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/calibration">
            <q-item-section avatar>
              <q-icon name="gps_fixed" />
            </q-item-section>

            <q-item-section> Calibration </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/work-orders">
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section> Work Orders </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/history">
            <q-item-section avatar>
              <q-icon name="history" />
            </q-item-section>

            <q-item-section> History </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item-label header class="text-grey-7"> ADMINISTRATION </q-item-label>

          <q-item clickable v-ripple to="/users">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> User Management </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/profile">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> Profile </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/settings">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- PAGE -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
