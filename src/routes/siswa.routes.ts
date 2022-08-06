import { Router } from 'express';
const router = Router();

import { DataSemuaSiswa, BuatDataSiswa, DataSiswa, HapusDataSiswa, PerbaharuiDataSiswa } from '../controllers/siswa.controllers';

router.route('/')
      .get(DataSemuaSiswa)
      .post(BuatDataSiswa);

router.route('/:id')
      .get(DataSiswa)
      .delete(HapusDataSiswa)
      .put(PerbaharuiDataSiswa);


export default router;  