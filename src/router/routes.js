const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("@/pages/DashboardPage.vue") },
      {
        path: "equipment",
        component: () => import("@/pages/EquipmentMastersPage.vue"),
      },
      {
        path: "preventive-maintenance",
        component: () => import("@/pages/PreventiveMaintenancePage.vue"),
      },
      {
        path: "corrective-maintenance",
        component: () => import("@/pages/CorrectiveMaintenancePage.vue"),
      },
      {
        path: "calibration",
        component: () => import("@/pages/CalibrationPage.vue"),
      },
      {
        path: "work-orders",
        component: () => import("@/pages/WorkOrdersPage.vue"),
      },
      {
        path: "notifications",
        component: () => import("@/pages/NotificationsPage.vue"),
      },
      {
        path: "history",
        component: () => import("@/pages/HistoryPage.vue"),
      },
      {
        path: "users",
        component: () => import("@/pages/UserManagementPage.vue"),
      },
      {
        path: "profile",
        component: () => import("@/pages/ProfilePage.vue"),
      },
      {
        path: "settings",
        component: () => import("@/pages/SettingsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
  },
];

export default routes;
