import api from '../api';
import { saveStorageMonitor } from '../../utils/saveStorage';

export default async function storeMonitor(monitor) {
  try {

    const responseMonitor = await api.post('/register/monitor', monitor);
    saveStorageMonitor(responseMonitor.data.success);

  } catch {
    
    alert("Erro ao salvar o monitor, tente mais tarde");

  }
}