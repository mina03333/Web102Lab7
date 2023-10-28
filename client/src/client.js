import { createClient } from '@supabase/supabase-js'

const URL = 'https://rsqkpmxbzkhfyyhoogzm.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcWtwbXhiemtoZnl5aG9vZ3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTcyMzcsImV4cCI6MjAxNDA5MzIzN30.S66cuS1jUtd-sHjhudByzcby6dA7wX7FM600FRoSKZM';

export const supabase = createClient(URL, API_KEY);
