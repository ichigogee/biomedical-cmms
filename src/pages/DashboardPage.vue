<template>
  <q-page class="q-pa-lg bg-grey-1">
    <div class="dashboard-container">
      <!-- PAGE HEADER -->
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bold">Dashboard</div>

          <div class="text-subtitle2 text-grey-7">
            Biomedical Equipment Maintenance Overview
          </div>
        </div>

        <div class="text-caption text-grey-7">July 5, 2026</div>
      </div>

      <!-- SUMMARY CARDS -->
      <div class="row q-col-gutter-md q-mb-lg">
        <!-- TOTAL -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card flat bordered class="dashboard-card">
            <q-card-section>
              <div class="row items-center">
                <q-avatar
                  color="blue-1"
                  text-color="primary"
                  icon="inventory_2"
                  size="48px"
                />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Total Equipment</div>

                  <div class="text-h5 text-weight-bold">1,254</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- OPERATIONAL -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card flat bordered class="dashboard-card">
            <q-card-section>
              <div class="row items-center">
                <q-avatar
                  color="green-1"
                  text-color="positive"
                  icon="check_circle"
                  size="48px"
                />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Operational</div>

                  <div class="text-h5 text-weight-bold">1,198</div>
                </div>
              </div>

              <div class="text-caption text-positive q-mt-sm">
                95.53% of total
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- UNDER REPAIR -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card flat bordered class="dashboard-card">
            <q-card-section>
              <div class="row items-center">
                <q-avatar
                  color="orange-1"
                  text-color="orange"
                  icon="build"
                  size="48px"
                />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Under Repair</div>

                  <div class="text-h5 text-weight-bold">18</div>
                </div>
              </div>

              <div class="text-caption text-orange q-mt-sm">
                Requires attention
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CONDEMNED -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card flat bordered class="dashboard-card">
            <q-card-section>
              <div class="row items-center">
                <q-avatar
                  color="red-1"
                  text-color="negative"
                  icon="block"
                  size="48px"
                />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Condemned</div>

                  <div class="text-h5 text-weight-bold">1</div>
                </div>
              </div>

              <div class="text-caption text-negative q-mt-sm">
                View in History
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- CHART + NOTIFICATIONS -->
      <div class="row q-col-gutter-md q-mb-lg">
        <!-- MAINTENANCE CHART -->
        <div class="col-12 col-md-8">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="row items-center justify-between">
                <div>
                  <div class="text-subtitle1 text-weight-bold">
                    Maintenance Activities
                  </div>

                  <div class="text-caption text-grey-7">
                    Preventive, corrective and calibration activities
                  </div>
                </div>

                <q-select
                  v-model="period"
                  dense
                  outlined
                  emit-value
                  map-options
                  :options="periodOptions"
                  style="width: 120px"
                />
              </div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="maintenance-chart">
                <div
                  v-for="item in maintenanceData"
                  :key="item.label"
                  class="chart-column"
                >
                  <div
                    class="chart-bar"
                    :style="{ height: `${item.value * 4}px` }"
                  />

                  <div class="text-caption text-grey-7 q-mt-sm">
                    {{ item.label }}
                  </div>

                  <div class="text-caption text-weight-bold">
                    {{ item.value }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- NOTIFICATIONS SUMMARY -->
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-subtitle1 text-weight-bold">
                Attention Required
              </div>

              <div class="text-caption text-grey-7">Items requiring action</div>
            </q-card-section>

            <q-separator />

            <q-list separator>
              <q-item clickable to="/notifications">
                <q-item-section avatar>
                  <q-avatar
                    color="orange-1"
                    text-color="orange"
                    icon="event_repeat"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label> PM Due </q-item-label>

                  <q-item-label caption> 22 equipment </q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon name="chevron_right" />
                </q-item-section>
              </q-item>

              <q-item clickable to="/notifications">
                <q-item-section avatar>
                  <q-avatar
                    color="purple-1"
                    text-color="purple"
                    icon="gps_fixed"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label> Calibration Due </q-item-label>

                  <q-item-label caption> 15 equipment </q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon name="chevron_right" />
                </q-item-section>
              </q-item>

              <q-item clickable to="/work-orders">
                <q-item-section avatar>
                  <q-avatar
                    color="blue-1"
                    text-color="primary"
                    icon="assignment"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label> Work Orders </q-item-label>

                  <q-item-label caption> 2 awaiting approval </q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon name="chevron_right" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>

      <!-- RECENT MAINTENANCE -->
      <q-card flat bordered>
        <q-card-section>
          <div class="text-subtitle1 text-weight-bold">Recent Maintenance</div>

          <div class="text-caption text-grey-7">
            Latest maintenance activities
          </div>
        </q-card-section>

        <q-separator />

        <q-table
          flat
          :rows="recentMaintenance"
          :columns="columns"
          row-key="id"
          hide-pagination
        >
          <template #body-cell-status="props">
            <q-td :props="props">
              <q-badge :color="statusColor(props.value)" rounded>
                {{ props.value }}
              </q-badge>
            </q-td>
          </template>
        </q-table>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const period = ref("monthly");

const periodOptions = [
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

const maintenanceData = [
  {
    label: "PM",
    value: 12,
  },
  {
    label: "CM",
    value: 18,
  },
  {
    label: "Calibration",
    value: 15,
  },
  {
    label: "Work Order",
    value: 8,
  },
];

const columns = [
  {
    name: "equipment",
    label: "Equipment",
    field: "equipment",
    align: "left",
  },
  {
    name: "type",
    label: "Type",
    field: "type",
    align: "left",
  },
  {
    name: "department",
    label: "Department",
    field: "department",
    align: "left",
  },
  {
    name: "date",
    label: "Date",
    field: "date",
    align: "left",
  },
  {
    name: "technician",
    label: "Technician",
    field: "technician",
    align: "left",
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    align: "center",
  },
];

const recentMaintenance = [
  {
    id: 1,
    equipment: "ECG Machine",
    type: "PM",
    department: "ICU",
    date: "Jul 5, 2026",
    technician: "Santos, L.",
    status: "Completed",
  },
  {
    id: 2,
    equipment: "Ventilator",
    type: "CM",
    department: "ICU",
    date: "Jul 4, 2026",
    technician: "Reyes, J.",
    status: "Ongoing",
  },
  {
    id: 3,
    equipment: "Defibrillator",
    type: "Calibration",
    department: "ER",
    date: "Jul 3, 2026",
    technician: "Cruz, M.",
    status: "Completed",
  },
  {
    id: 4,
    equipment: "Infusion Pump",
    type: "PM",
    department: "Ward",
    date: "Jul 2, 2026",
    technician: "Reyes, J.",
    status: "Completed",
  },
];

function statusColor(status) {
  if (status === "Completed") return "positive";
  if (status === "Ongoing") return "orange";
  if (status === "Overdue") return "negative";

  return "grey";
}
</script>

<style scoped lang="scss">
.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-card {
  min-height: 145px;
}

.maintenance-chart {
  height: 280px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  gap: 30px;
  padding: 30px 20px 10px;
}

.chart-column {
  flex: 1;
  max-width: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

.chart-bar {
  width: 45px;
  max-height: 220px;
  min-height: 10px;
  background: #1976d2;
  border-radius: 6px 6px 0 0;
}

.full-height {
  height: 100%;
}
</style>
