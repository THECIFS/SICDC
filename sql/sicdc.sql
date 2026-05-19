-- Estructura de tablas adaptada para PostgreSQL
-- Tiempo de generación: 18-05-2026

START TRANSACTION;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla administradores
--

CREATE TABLE administradores (
  id_usuario integer NOT NULL,
  id_cuenta integer NOT NULL,
  oficina varchar(100) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla areas
--

CREATE TABLE areas (
  id_area integer NOT NULL,
  nombre varchar(100) NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla cuentas
--

CREATE TABLE cuentas (
  id integer NOT NULL,
  password varchar(255) NOT NULL,
  estado smallint NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla donaciones
--

CREATE TABLE donaciones (
  id_donacion integer NOT NULL,
  id_usuario integer NOT NULL,
  tipo_donacion varchar(100) NOT NULL,
  monto real NOT NULL,
  fecha_donacion date NOT NULL,
  observaciones text NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla donadores
--

CREATE TABLE donadores (
  id_usuario integer NOT NULL,
  ciudad varchar(100) NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla expedientes
--

CREATE TABLE expedientes (
  id_expediente integer NOT NULL,
  id_paciente integer NOT NULL,
  fecha_apertura date NOT NULL,
  estado varchar(50) NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla pacientes
--

CREATE TABLE pacientes (
  id_usuario integer NOT NULL,
  fecha_nacimiento date NOT NULL,
  direccion varchar(255) DEFAULT NULL,
  sexo varchar(20) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla profesionales_salud
--

CREATE TABLE profesionales_salud (
  id_usuario integer NOT NULL,
  id_cuenta integer NOT NULL,
  especialidad varchar(100) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla registros
--

CREATE TABLE registros (
  id_registro integer NOT NULL,
  id_expediente integer NOT NULL,
  id_medico integer DEFAULT NULL,
  id_area integer DEFAULT NULL,
  fecha date NOT NULL,
  diagnostico text NOT NULL,
  tratamiento text NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla usuarios
--

CREATE TABLE usuarios (
  id integer NOT NULL,
  nombre varchar(100) NOT NULL,
  apellido_paterno varchar(100) NOT NULL,
  apellido_materno varchar(100) NOT NULL,
  telefono varchar(20) NOT NULL,
  correo varchar(150) NOT NULL,
  rol varchar(50) DEFAULT NULL,
  rfc varchar(13) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla voluntarios
--

CREATE TABLE voluntarios (
  id_usuario integer NOT NULL,
  id_cuenta integer NOT NULL,
  fecha_ingreso date NOT NULL
);

--
-- Claves primarias y unicidad
--

ALTER TABLE administradores ADD PRIMARY KEY (id_usuario);
ALTER TABLE areas ADD PRIMARY KEY (id_area);
ALTER TABLE cuentas ADD PRIMARY KEY (id);
ALTER TABLE donaciones ADD PRIMARY KEY (id_donacion);
ALTER TABLE donadores ADD PRIMARY KEY (id_usuario);
ALTER TABLE expedientes ADD PRIMARY KEY (id_expediente);
ALTER TABLE pacientes ADD PRIMARY KEY (id_usuario);
ALTER TABLE profesionales_salud ADD PRIMARY KEY (id_usuario);
ALTER TABLE registros ADD PRIMARY KEY (id_registro);
ALTER TABLE usuarios ADD PRIMARY KEY (id);
ALTER TABLE usuarios ADD CONSTRAINT uq_usuarios_correo UNIQUE (correo);
ALTER TABLE voluntarios ADD PRIMARY KEY (id_usuario);

--
-- Índices adicionales (Equivalentes a las KEY de MySQL)
--

CREATE INDEX idx_administradores_cuenta ON administradores (id_cuenta);
CREATE INDEX idx_donaciones_donador ON donaciones (id_usuario);
CREATE INDEX idx_expedientes_paciente ON expedientes (id_paciente);
CREATE INDEX idx_profesionales_cuenta ON profesionales_salud (id_cuenta);
CREATE INDEX idx_registros_expediente ON registros (id_expediente);
CREATE INDEX idx_registros_area ON registros (id_area);
CREATE INDEX idx_voluntarios_cuenta ON voluntarios (id_cuenta);

--
-- Restricciones (Foreign Keys)
--

-- Filtros para la tabla administradores
ALTER TABLE administradores
  ADD CONSTRAINT fk_administradores_cuentas FOREIGN KEY (id_cuenta) REFERENCES cuentas (id) ON UPDATE CASCADE,
  ADD CONSTRAINT fk_administradores_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Filtros para la tabla donaciones
ALTER TABLE donaciones
  ADD CONSTRAINT fk_donaciones_donadores FOREIGN KEY (id_usuario) REFERENCES donadores (id_usuario) ON UPDATE CASCADE;

-- Filtros para la tabla donadores
ALTER TABLE donadores
  ADD CONSTRAINT fk_donadores_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Filtros para la tabla expedientes
ALTER TABLE expedientes
  ADD CONSTRAINT fk_expedientes_pacientes FOREIGN KEY (id_paciente) REFERENCES pacientes (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE;

-- Filtros para la tabla pacientes
ALTER TABLE pacientes
  ADD CONSTRAINT fk_pacientes_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Filtros para la tabla profesionales_salud
ALTER TABLE profesionales_salud
  ADD CONSTRAINT fk_profesionales_cuentas FOREIGN KEY (id_cuenta) REFERENCES cuentas (id) ON UPDATE CASCADE,
  ADD CONSTRAINT fk_profesionales_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Filtros para la tabla registros
ALTER TABLE registros
  ADD CONSTRAINT fk_registros_areas FOREIGN KEY (id_area) REFERENCES areas (id_area) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT fk_registros_expedientes FOREIGN KEY (id_expediente) REFERENCES expedientes (id_expediente) ON DELETE CASCADE ON UPDATE CASCADE;

-- Filtros para la tabla voluntarios
ALTER TABLE voluntarios
  ADD CONSTRAINT fk_voluntarios_cuentas FOREIGN KEY (id_cuenta) REFERENCES cuentas (id) ON UPDATE CASCADE,
  ADD CONSTRAINT fk_voluntarios_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios (id) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;