import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kernavphmczykabkgsqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlcm5hdnBobWN6eWthYmtnc3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MzIyMTgsImV4cCI6MjAxMDIwODIxOH0.qOtgRDlZP5SGXzz4DOcK1ceTv2mW3f4F6HktVxW-ICE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
