<template>
  <q-page class="q-pa-lg bg-grey-1">
    <div class="dashboard-container">
      <!-- PAGE HEADER -->
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bold">Dashboard</div>

          <div class="text-subtitle2 text-grey-7">Biomedical Equipment Maintenance Overview</div>
        </div>

        <div class="text-caption text-grey-7">July 5, 2026</div>
      </div>
      <!-- SUMMARY CARDS -->
      <div class="row q-col-gutter-md q-mb-lg">
        <!-- OPERATIONAL -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card
            flat
            bordered
            class="dashboard-card cursor-pointer"
            clickable
            @click="$router.push('/equipment')"
          >
            <q-card-section>
              <div class="row items-center">
                <q-avatar color="green-1" text-color="positive" icon="check_circle" size="48px" />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Operational</div>

                  <div class="text-h5 text-weight-bold">95%</div>

                  <div class="text-caption text-positive">Active</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- PM RATE -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card
            flat
            bordered
            class="dashboard-card cursor-pointer"
            clickable
            @click="$router.push('/preventive-maintenance')"
          >
            <q-card-section>
              <div class="row items-center">
                <q-avatar color="blue-1" text-color="primary" icon="event_available" size="48px" />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">PM Rate</div>

                  <div class="text-h5 text-weight-bold">98%</div>

                  <div class="text-caption text-positive">On Time</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CALIBRATION -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card
            flat
            bordered
            class="dashboard-card cursor-pointer"
            clickable
            @click="$router.push('/calibration')"
          >
            <q-card-section>
              <div class="row items-center">
                <q-avatar color="purple-1" text-color="purple" icon="tune" size="48px" />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Calibration</div>

                  <div class="text-h5 text-weight-bold">99%</div>

                  <div class="text-caption text-positive">Certified</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- OPEN WORK ORDERS -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card
            flat
            bordered
            class="dashboard-card cursor-pointer"
            clickable
            @click="$router.push('/work-orders')"
          >
            <q-card-section>
              <div class="row items-center">
                <q-avatar color="red-1" text-color="negative" icon="assignment_late" size="48px" />

                <div class="q-ml-md">
                  <div class="text-caption text-grey-7">Open WO</div>

                  <div class="text-h5 text-weight-bold">4</div>

                  <div class="text-caption text-negative">Critical</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- EQUIPMENT STATUS + CRITICAL ALERTS -->
      <div class="row q-col-gutter-md q-mb-lg">
        <!-- EQUIPMENT STATUS -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-subtitle1 text-weight-bold">Equipment Status</div>

              <div class="text-caption text-grey-7">
                Current operational status of active equipment
              </div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="equipment-status-content">
                <!-- DONUT -->
                <div class="status-donut">
                  <div class="status-donut-center">
                    <div class="text-h5 text-weight-bold">1,240</div>

                    <div class="text-caption text-grey-7">Total Assets</div>
                  </div>
                </div>

                <!-- LEGEND -->
                <div class="status-legend">
                  <div v-for="item in equipmentStatus" :key="item.label" class="status-item">
                    <div class="row items-center justify-between">
                      <div class="row items-center">
                        <span class="status-dot" :style="{ backgroundColor: item.color }" />

                        <span class="text-body2">
                          {{ item.label }}
                        </span>
                      </div>

                      <div class="text-body2 text-weight-bold">
                        {{ item.value }}
                      </div>
                    </div>

                    <q-linear-progress
                      :value="item.value / 1240"
                      :color="item.qColor"
                      size="5px"
                      rounded
                      class="q-mt-xs"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CRITICAL ALERTS -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="row items-center justify-between">
                <div>
                  <div class="text-subtitle1 text-weight-bold">Critical Alerts</div>

                  <div class="text-caption text-grey-7">
                    Equipment requiring immediate attention
                  </div>
                </div>

                <q-badge color="negative" rounded label="3 Active" />
              </div>
            </q-card-section>

            <q-separator />

            <q-list separator>
              <q-item
                v-for="alert in criticalAlerts"
                :key="alert.id"
                clickable
                @click="$router.push(alert.route)"
              >
                <q-item-section avatar>
                  <q-avatar
                    :color="alert.avatarColor"
                    :text-color="alert.textColor"
                    :icon="alert.icon"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-weight-medium">
                    {{ alert.title }}
                  </q-item-label>

                  <q-item-label caption>
                    {{ alert.description }}
                  </q-item-label>

                  <q-item-label caption class="q-mt-xs">
                    {{ alert.department }}
                  </q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-badge :color="alert.badgeColor" :label="alert.status" rounded />

                  <q-icon name="chevron_right" size="20px" class="q-mt-sm" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>

      <!-- WEEKLY MAINTENANCE & CALIBRATION FORECAST -->
      <q-card flat bordered class="q-mb-lg">
        <q-card-section>
          <div class="row items-center justify-between">
            <div>
              <div class="text-subtitle1 text-weight-bold">
                Weekly Maintenance & Calibration Forecast
              </div>

              <div class="text-caption text-grey-7">Scheduled activities for the next 5 days</div>
            </div>

            <q-btn
              flat
              dense
              color="primary"
              label="View Schedule"
              icon-right="arrow_forward"
              to="/preventive-maintenance"
            />
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="forecast-header row items-center q-pb-sm">
            <div class="col text-caption text-grey-7 text-weight-medium">DAY</div>

            <div class="col text-center text-caption text-grey-7 text-weight-medium">
              PREVENTIVE MAINTENANCE
            </div>

            <div class="col text-center text-caption text-grey-7 text-weight-medium">
              CALIBRATION
            </div>
          </div>

          <q-separator />

          <div
            v-for="day in maintenanceForecast"
            :key="day.day"
            class="forecast-row row items-center"
          >
            <div class="col">
              <div class="text-body2 text-weight-medium">
                {{ day.day }}
              </div>
            </div>

            <div class="col text-center">
              <q-btn
                flat
                dense
                rounded
                color="primary"
                class="forecast-number"
                :label="String(day.pm)"
                @click="$router.push('/preventive-maintenance')"
              />
            </div>

            <div class="col text-center">
              <q-btn
                flat
                dense
                rounded
                color="purple"
                class="forecast-number"
                :label="String(day.calibration)"
                @click="$router.push('/calibration')"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
// import { ref } from 'vue'

// const period = ref('monthly')

// const periodOptions = [
//   {
//     label: 'Weekly',
//     value: 'weekly',
//   },
//   {
//     label: 'Monthly',
//     value: 'monthly',
//   },
//   {
//     label: 'Yearly',
//     value: 'yearly',
//   },
// ]

const equipmentStatus = [
  {
    label: 'Operational',
    value: 1180,
    color: '#21BA45',
    qColor: 'positive',
  },
  {
    label: 'In Maintenance',
    value: 42,
    color: '#F2C037',
    qColor: 'warning',
  },
  {
    label: 'Out of Service',
    value: 18,
    color: '#C10015',
    qColor: 'negative',
  },
]

const criticalAlerts = [
  {
    id: 1,
    title: 'ICU Ventilator #04',
    description: 'Airway pressure sensor failure',
    department: 'ICU',
    status: 'Out of Service',
    icon: 'medical_services',
    avatarColor: 'red-1',
    textColor: 'negative',
    badgeColor: 'negative',
    route: '/corrective-maintenance',
  },
  {
    id: 2,
    title: 'Defibrillator #12',
    description: 'Annual calibration overdue',
    department: 'Emergency Room',
    status: 'Overdue',
    icon: 'monitor_heart',
    avatarColor: 'orange-1',
    textColor: 'orange',
    badgeColor: 'orange',
    route: '/calibration',
  },
  {
    id: 3,
    title: 'CT Scanner',
    description: 'Annual preventive maintenance due in 3 days',
    department: 'Radiology',
    status: 'Due Soon',
    icon: 'scanner',
    avatarColor: 'yellow-2',
    textColor: 'orange-10',
    badgeColor: 'warning',
    route: '/preventive-maintenance',
  },
]

// const maintenanceData = [
//   {
//     label: 'PM',
//     value: 12,
//   },
//   {
//     label: 'CM',
//     value: 18,
//   },
//   {
//     label: 'Calibration',
//     value: 15,
//   },
//   {
//     label: 'Work Order',
//     value: 8,
//   },
// ]

const maintenanceForecast = [
  {
    day: 'Mon',
    pm: 12,
    calibration: 4,
  },
  {
    day: 'Tue',
    pm: 8,
    calibration: 6,
  },
  {
    day: 'Wed',
    pm: 15,
    calibration: 2,
  },
  {
    day: 'Thu',
    pm: 10,
    calibration: 5,
  },
  {
    day: 'Fri',
    pm: 5,
    calibration: 1,
  },
]

// const columns = [
//   {
//     name: 'equipment',
//     label: 'Equipment',
//     field: 'equipment',
//     align: 'left',
//   },
//   {
//     name: 'type',
//     label: 'Type',
//     field: 'type',
//     align: 'left',
//   },
//   {
//     name: 'department',
//     label: 'Department',
//     field: 'department',
//     align: 'left',
//   },
//   {
//     name: 'date',
//     label: 'Date',
//     field: 'date',
//     align: 'left',
//   },
//   {
//     name: 'technician',
//     label: 'Technician',
//     field: 'technician',
//     align: 'left',
//   },
//   {
//     name: 'status',
//     label: 'Status',
//     field: 'status',
//     align: 'center',
//   },
// ]

// const recentMaintenance = [
//   {
//     id: 1,
//     equipment: 'ECG Machine',
//     type: 'PM',
//     department: 'ICU',
//     date: 'Jul 5, 2026',
//     technician: 'Santos, L.',
//     status: 'Completed',
//   },
//   {
//     id: 2,
//     equipment: 'Ventilator',
//     type: 'CM',
//     department: 'ICU',
//     date: 'Jul 4, 2026',
//     technician: 'Reyes, J.',
//     status: 'Ongoing',
//   },
//   {
//     id: 3,
//     equipment: 'Defibrillator',
//     type: 'Calibration',
//     department: 'ER',
//     date: 'Jul 3, 2026',
//     technician: 'Cruz, M.',
//     status: 'Completed',
//   },
//   {
//     id: 4,
//     equipment: 'Infusion Pump',
//     type: 'PM',
//     department: 'Ward',
//     date: 'Jul 2, 2026',
//     technician: 'Reyes, J.',
//     status: 'Completed',
//   },
// ]

// function statusColor(status) {
//   if (status === 'Completed') return 'positive'
//   if (status === 'Ongoing') return 'orange'
//   if (status === 'Overdue') return 'negative'

//   return 'grey'
// }
</script>

<style scoped lang="scss">
.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-card {
  min-height: 145px;
  transition: 0.2s ease;
}

.dashboard-card:hover {
  transform: translateY(-2px);
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

.equipment-status-content {
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.status-donut {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: conic-gradient(
    #21ba45 0deg 342.6deg,
    #f2c037 342.6deg 354.8deg,
    #c10015 354.8deg 360deg
  );

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.status-donut-center {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.status-legend {
  width: 200px;
}

.status-item {
  margin-bottom: 18px;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.forecast-chart {
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 30px;
  padding: 20px 30px 0;
}

.forecast-column {
  flex: 1;
  max-width: 120px;
  text-align: center;
}

.forecast-header {
  padding: 0 12px;
}

.forecast-row {
  min-height: 58px;
  padding: 4px 12px;
  border-bottom: 1px solid #eeeeee;
}

.forecast-row:last-child {
  border-bottom: none;
}

.forecast-number {
  min-width: 56px;
  font-size: 14px;
  font-weight: 600;
}
</style>
