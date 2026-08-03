import Admin from "../models/Admin.js";

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL || "jagransanskarshala2026@gmail.com",
  password: process.env.ADMIN_PASSWORD || "26@Jagran#BM",
  name: "Jagran Sanskarshala Admin",
  role: "superadmin",
};

export const seedAdminUser = async () => {
  try {
    const adminExists = await Admin.findOne({
      email: DEFAULT_ADMIN.email,
    });

    if (!adminExists) {
      await Admin.create(DEFAULT_ADMIN);
      console.log(
        `✅ Default Admin Seeded Successfully: ${DEFAULT_ADMIN.email}`,
      );
    } else {
      console.log(`ℹ️ Admin Account Exists: ${DEFAULT_ADMIN.email}`);
    }
  } catch (error) {
    console.error("❌ Error seeding admin user:", error.message);
  }
};
