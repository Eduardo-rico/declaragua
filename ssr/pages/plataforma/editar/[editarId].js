import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';

const Editar = () => {
  const router = useRouter();
  const { editarId } = router.query;
  return (
    <div>
      <p>Se edita el id {editarId}</p>
    </div>
  );
};

export default Editar;
