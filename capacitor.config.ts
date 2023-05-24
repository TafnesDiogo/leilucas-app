import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "leilucas-app",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      icon: "@/assets/icone.png",
    },
  },
};

export default config;
